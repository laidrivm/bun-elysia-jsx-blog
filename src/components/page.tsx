const ArrowComponent = () => (
  <a href="/" className="arrow-container">
    <div className="arrow">←</div>
  </a>
);

const Page = ({ title, content, includeArrow = false }: { title: string; content: string; includeArrow: bool; }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/main.css" />
      </head>
      <body>
        {includeArrow && <ArrowComponent />}
        <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
      </body>
    </html>
  );
}

export default Page;
