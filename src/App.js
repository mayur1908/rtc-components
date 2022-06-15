import  './App.css';
import Component from './Component/Component';
function App(){
  return(
    <div>
      <p className='container'>View Cource</p>
      <Component lecture="Lecture-1 Introduction to HTML"/>
      <Component lecture="Lecture-2 Headings, Bold, Italic, Underline, Superscript, Subscript, Breakrow"/>
      <Component lecture="Lecture-3 Image Tag and Anchor Tag"/>
      <Component lecture="Lecture-4 Tasty Food Website, Div Tag and Paragraph Tag"/>
      <Component lecture="Lecture-5 CSS color, background-color, font-size and HTML form basics"/>
      <Component lecture="Lecture-6 Advanced Form Elements"/>
      <Component lecture="Lecture-7 Video, Audio and Iframe Tag"/>
      <Component lecture="Lecture-8 Marquee, Ordered List, Unordered List and Table"/>
      <Component lecture="Lecture-9 Introduction to CSS"/>
      <Component lecture="Lecture-10 Selectors in CSS, Padding and Margin"/>
      <Component lecture="Lecture-11 Border and Border Radius in CSS"/>
      <Component lecture="Lecture-12 Centering Element and Box Shadow"/>
      <Component lecture="Lecture-13 Hover Effect and Display Properties in CSS"/>
      <Component lecture="Lecture-14 Host Static Webpages on GitHub"/>
      <Component lecture="Lecture-15 CSS Positions"/>
      <Component lecture="Lecture-16 Inline, Document Level and External CSS"/>
    </div>
    
  );
}
export default App;