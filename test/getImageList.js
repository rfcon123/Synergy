// getImageList.js
import { writeFileSync } from "fs";
import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: "public_ffpHwssZ79ESRII/VfT941pjB5U=",
  privateKey: "private_ujbzQph2KLgOkS3vbE59HvW1AhE=",
  urlEndpoint: "https://ik.imagekit.io/hzvbqwpg8",
});

const listAllFiles = async () => {
  let files = [];
  let skip = 0;
  const limit = 1000;

  while (true) {
    const response = await imagekit.listFiles({ skip, limit });
    if (response.length === 0) break;
    files = files.concat(response);
    skip += limit;
  }

  const data = files
    .filter(file => file.type === "file") // Skip folders if listed
    .filter(file => file.filePath.match(/\.(jpg|jpeg|png|webp)$/i)) // Only images
    .map((file) => ({
      name: file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "), // Clean name
      image: file.filePath, // Full path including folders
    }));

  writeFileSync(
    "productsData.js",
    `const productsData = ${JSON.stringify(data, null, 2)};\n\nexport default productsData;`
  );

  console.log("✅ productsData.js created with", data.length, "entries");
};

listAllFiles().catch(console.error);
