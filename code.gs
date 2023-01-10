// The code will find all hyperlink and highlight them within the google docs including paragraph and table's data.
// Demo Doc = https://docs.google.com/document/d/16cbYg-g2pjpcBuUserhrCRfJw7VcHaXGvtmL0LxMzko/edit

"Modiefied Script"

function highlightLink2() {
  // let highlightColor = { [DocumentApp.Attribute.BACKGROUND_COLOR]: '#FFFF00' } // This is not used.
  let doc = DocumentApp.getActiveDocument();
  let body = doc.getBody();
  let paraChild = body.getParagraphs();
  paraChild.forEach(ele => {
  try {
    if (ele.getText() != "") {
      let sentence = ele.getText();
      [...new Set(sentence.split(" ").map(e => e.trim()))].forEach(t => {
        let word = ele.findText(t);
        while (word) {
          let ele = word.getElement();
          let start = word.getStartOffset();
          if (ele.getLinkUrl(start)) {
            ele.asText().setBackgroundColor(start, word.getEndOffsetInclusive(), '#FFFF00');
          }
          word = ele.findText(t, word);
          }
        });
      }
    } catch {}
  });
}










// const countHyperlinsks = () => {
//   let highlightColor = {[DocumentApp.Attribute.BACKGROUND_COLOR]:'#FFFF00'};
//   let doc = DocumentApp.getActiveDocument();
//   let body = doc.getBody();
//   let paraChild = body.getParagraphs()
//   paraChild.forEach((ele,i)=>{
//     if(ele.getText()!=""){
//       let searchtext = body.findText(ele.getText());
//       let url= searchtext.getElement().getLinkUrl();
//       if(url!=null){
//         searchtext.getElement().setAttributes(highlightColor)
//       }
//     }
//   })
// }
