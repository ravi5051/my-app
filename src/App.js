import Navbar from './Navbar.js'
import Heading from './Heading.js'
import ConverterForm from './ConverterForm.js'
import Button from './Button'
function App() {
  return (
    <>
      <Heading heading="Text Formatter" />
      <Navbar title="Services" />
      <ConverterForm />
      <Button />
    </>
  );
}
export default App;
