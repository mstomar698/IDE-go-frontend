import React, { useState, Fragment } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const Home = ({ theme, toggleTheme }) => {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const [language, setLanguage] = useState('python'); //python
  const [output, setOutput] = useState('');

  let handleSubmit = async (e) => {
    e.preventDefault();
    if (code.length === 0) {
      setOutput('Enter Code in above box');
      setTimeout(() => {
        setOutput('');
      }, 3000);
      return;
    }

    var res;
    var languageList;
    var langid;

    try {
      await fetch('/api/v1/language', {
        method: 'GET',
        mode: 'no-cors',
      })
        .then((res) => res.json())
        .then((data) => {
          languageList = data;
        });
      console.log(languageList);
    } catch (error) {
      console.log(error);
    }
    console.log(languageList.length);
    for (let i = 0; i < languageList.length; i++) {
      if (languageList[i].Name === language) {
        langid = languageList[i].Id;
        console.log(langid);
      }
    }

    var raw = JSON.stringify({
      langnumber: langid,
      code,
      input,
    });

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Access=Control-Allow-Origin', '*');

    res = await fetch('/api/v1/sendcode', {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      mode: 'cors', // no-cors
      redirect: 'follow',
    });

    let resJson = await res.json();
    console.log(resJson);
    setOutput(resJson.output);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    console.log(e.target.value);
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className="text-4xl mb-6 mt-2 mx-auto text-center text-red-600 font-bold uppercase">
        Coding Environment
      </div>
      <form className="form">
        {/*
        <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Language List{' '}
        </Dropdown.Toggle>
        
        <Dropdown.Menu>
        <Dropdown.Item value="python">python</Dropdown.Item>
        <Dropdown.Item value="javascript">JavaScript</Dropdown.Item>
        <Dropdown.Item value="java">java</Dropdown.Item>
        <Dropdown.Item value="c++">C++</Dropdown.Item>
        <Dropdown.Item value="go">GO</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
      */}
        {/*
         */}
        <div className="justify-center justify-items-center items-center content-center">
          <select
            onChange={handleLanguageChange}
            className="mt-2 mb-4 text-black-400 text-2xl"
          >
            <option value="python">Python</option>
            <option value="javascript">Javascript</option>
            <option value="java">Java</option>
            <option value="c++">C++</option>
            <option value="go">Go</option>
          </select>
        </div>

        <div className="editor">
          <div className="line-numbers">
            <span></span>
          </div>
          <textarea
            name="code"
            value={code}
            id="codingArea"
            placeholder="code"
            onChange={handleCodeChange}
            required
            cols="40"
            rows="5"
          ></textarea>
        </div>

        <br />
        <textarea
          name="input"
          id="inputArea"
          value={input}
          placeholder="input"
          onChange={handleInputChange}
          required
          cols="40"
          rows="5"
        ></textarea>
        <br />

        {/*
<label htmlFor="upload">Send Code</label>
<input type="submit" value="Submit" onClick={handleSubmit} />
<button className='button text-white-400' htmlFor="upload" value="submit" onClick={handleSubmit}>SubMit</button>
*/}
      </form>
      <div className="item-center justify-center mt-4 mb-2 bg-black-400 content-center mx-auto">
        <button
          className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded item-center"
          htmlFor="upload"
          value="submit"
          onClick={handleSubmit}
        >
          SubMit
        </button>
      </div>
      <div className="flex flex-col output">
        <center>
          <div className="text-green-400 bg-blue-400 mt-4 mb-4 px-2 font-bold hover:bg-red-400">
            {/*message */}
            {output ? (
              <p>
                {output.split(/\n/).map((line) => (
                  <Fragment key={line}>
                    {line}
                    <br />
                  </Fragment>
                ))}
              </p>
            ) : null}
          </div>
        </center>
      </div>
    </>
  );
};

export default Home;
