export const runtime = "edge";

export async function POST(req: Request) {
	const body = await req.json();

	const { title, contact, message } = body;

	const chatIds: string[] = (process.env.RECEIVER_CHAT_IDS || "").split(",");

	const relayedMessage = `Received a new contact request from *https://kindynos.mx* %0A%0ATitle: %0A%0A*${title}*%0A%0AMessage: %0A%0A*${message}*%0A%0AContact: %0A%0A*${contact}*`;

	try {
		for (const chat of chatIds) {
			await fetch(
				`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${chat}&text=${relayedMessage}&parse_mode=markdown`,
			);
		}
	} catch {
		/* empty */
		return new Response("", {
			status: 500,
		});
	}

	return new Response("", {
		status: 200,
	});
}
