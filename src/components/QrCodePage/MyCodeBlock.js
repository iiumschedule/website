import CodeBlock from '@theme/CodeBlock';
import queryString from "query-string";
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function MyCodeBlock() {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>{
            () => {
                const rawData = queryString.parse(window.location.search).data;
                const dataDecoded = decodeURIComponent(rawData);
                const json = JSON.parse(dataDecoded);
                const jsonString = JSON.stringify(json);
                return <div>
                    <CodeBlock
                        language="json">
                        {jsonString}
                    </CodeBlock>
                </div>
            }
        }
        </BrowserOnly>
    );
};