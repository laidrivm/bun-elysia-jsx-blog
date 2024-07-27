const Heading = ({ depth, text, id }) => {
  if (depth === 1) {
    return <h1>{text}</h1>;
  }
  const Tag = `h${depth}` as keyof JSX.IntrinsicElements;
  return (
    <Tag id={id}>
      <a href={`#${id}`}>{text}</a>
      {/* <button className="copy-link" onClick={() => copyToClipboard(`#${id}`)}>Copy 🔗</button> */}
    </Tag>
  );
};

export default Heading;