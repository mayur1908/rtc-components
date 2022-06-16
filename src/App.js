import  './App.css';
import Component from './Component/Component';
function App(){
  const components= [
    {
      lecture:"Lecture-1 Introduction to HTML"
    },
    {
      lecture:"Lecture-2 Headings, Bold, Italic, Underline, Superscript, Subscript, Breakrow"
    },
    {
      lecture:"Lecture-3 Image Tag and Anchor Tag"
    },
    {
      lecture:"Lecture-4 Tasty Food Website, Div Tag and Paragraph Tag"    
    },
    {
      lecture:"Lecture-5 CSS color, background-color, font-size and HTML form basics"
    },
    {
      lecture: "Lecture-6 Advanced Form Elements"
    },
    {
      lecture:"Lecture-7 Video, Audio and Iframe Tag"
    },
    {
      lecture: "Lecture-8 Marquee, Ordered List, Unordered List and Table"
    },
    {
      lecture: "Lecture-9 Introduction to CSS"
    },
    {
      lecture:"Lecture-10 Selectors in CSS, Padding and Margin"
    },
    {
      lecture: "Lecture-11 Border and Border Radius in CSS"
    },
    {
      lecture:"Lecture-13 Hover Effect and Display Properties in CSS"
   
    },
    {
      lecture: "Lecture-16 Inline, Document Level and External CSS"
  
    },
  ]
  
  return(
    <div>
      <p className='container'>View Cource</p>
      {
        components.map((component)=>{
          return <Component lecture={component.lecture} />
        }
        )
      }
       </div>
    
  );
}
export default App;