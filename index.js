import { Pipeline, pipeline } from "@xenova/transformers";

let pipe = await pipeline("image-classification");
const result = await pipe("/home/ramon/Projects/inventoryControl/ox.webp");
const result2 = await pipe("/home/ramon/Projects/inventoryControl/c.webp");
const result3 = await pipe("/home/ramon/Projects/inventoryControl/man-box.png");
const result4 = await pipe("/home/ramon/Projects/inventoryControl/man.png");
console.log(result3);
console.log(result4);
