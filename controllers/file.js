export const handleFile = (req, res) => {
  //   console.log(req.file);

  const image = req.file;

    const imgPath = `/images/${image.filename}`

  console.log(image, ":FILE");
  res.send(image);
};
