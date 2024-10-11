import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { NextUIProvider } from '@nextui-org/react';

export default async function LocaleLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body
                className=""
                style={{
                    backgroundImage: `url('/assets/images/AnhNenWeb.jpg')`,
                    backgroundSize: 'auto',
                    backgroundPosition: 'center',
                }}
            >
                <NextUIProvider>
                    <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
                </NextUIProvider>
            </body>
        </html>
    );
}
