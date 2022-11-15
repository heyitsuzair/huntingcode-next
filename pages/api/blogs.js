// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "node:fs";
export default function handler(req, res) {
  fs.readdir("blogdata", "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "No Folder Found!" });
    }
    res.status(200).json(data);
  });
}
