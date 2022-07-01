const HelloWorld = ({ text, color, fontSize, textTransform, transform }) => {
  return (
    <h1
      style={{
        color: color,
        fontSize: fontSize,
        textTransform: textTransform,
        transform: transform,
      }}
    >
      {text}
    </h1>
  );
};

export default HelloWorld;
