import { Analytics } from "@vercel/analytics/react";

import { ThemeProvider } from "@/theme";
import { defaultMetadata } from "@/utils";

export const metadata = defaultMetadata;

export default async function RootLayout({ children }) {
	return (
		<html lang="es">
			<body>
				<Analytics />
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
