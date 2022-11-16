import * as fs from "node:fs";
export default async function handler(req, res) {
  if (req.method === "POST") {
    let data = await fs.promises.readdir("contactdata");
    fs.promises.writeFile(
      `contactdata/${data.length + 1}.json`,
      JSON.stringify(req.body)
    );
    res.status(200).json("Added!");
  } else {
    res.status(200).json(["all blogs"]);
  }
}
