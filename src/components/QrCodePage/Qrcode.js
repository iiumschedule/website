import { QRCodeSVG } from 'qrcode.react';
import queryString from "query-string";
import { useColorMode } from '@docusaurus/theme-common';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function Qrcode() {
    const isDarkTheme = useColorMode().colorMode === 'dark';

    return (
        <BrowserOnly fallback={<div>Loading...</div>}>{
            () => {
                const rawData = queryString.parse(window.location.search).data;
                return <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                    <QRCodeSVG size={300} value={rawData} marginSize={isDarkTheme ? 2 : 0} />
                </div>
            }
        }
        </BrowserOnly>
    );
};