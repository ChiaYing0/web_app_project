// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SelectionUI from './SelectionUI';
import { Flex, Button } from 'antd';

const accent_options = [
  {value: '日本'},
  {value: '越南'},
  {value: '法國'},  
  {value: '印度'},
  {value: '澳洲'},
];

const scenario_options = [
  {value: '旅遊'},
  {value: '面試'},
  {value: '日常'},
];

function App() {

  const [accent, setAccent] = useState("choose");
  const [scenario, setScenario] = useState("choose");

  return (
    <div className="App">
      

      <div className="Setting">

      <Flex gap='middle' vertical>

      <h1 className="Logo">Tutor</h1>

        <Flex gap="middle" horizontal>
          <SelectionUI
            title={"語調"}
            default_value={accent}
            options={accent_options}
            handleChange={setAccent}
          ></SelectionUI>

          <SelectionUI
            title={"情境"}
            default_value={scenario}
            options={scenario_options}
            handleChange={setScenario}
          ></SelectionUI>
        </Flex>
      
        <Button type="primary">Primary Button</Button>
      
        </Flex>

      </div>


    {/* <h1>{accent}</h1>
    <h1>{scenario}</h1> */}
    </div>
  );
}

export default App;
