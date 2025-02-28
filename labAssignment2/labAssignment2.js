function byTagName(node, tagName) {
 let count = [];
 if(node.nodeType === Node.ELEMENT_NODE) {
   for (let i = 0; i < node.children.length; i++) {
     let child = node.children[i];
     if (child.tagName.toLowerCase() === tagName.toLowerCase()) {
       count = [...count, child];
     }
     if (child.nodeType === Node.ELEMENT_NODE) {
       count = count.concat(byTagName(child, tagName));
     }
   }
 } else {
   return [];
 }
 return count;
}
console.log(byTagName(document.body, "h1").length);
console.log(byTagName(document.body, "span").length);
let para = document.querySelector("p");
console.log(byTagName(para, "span").length);
