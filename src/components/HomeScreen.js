import { useState } from 'react'
import { useRef } from 'react';
import '../styles/HomeScreen.css'

export default function CsvReader() {
    let refc = useRef(null);
    const [csvFile, setCsvFile] = useState();
    const [csvArray, setCsvArray] = useState([]);
    const [headers, setHeaders] = useState([]);
    let YOURJSON = [];
    //-> FUNCTION TO CONVERT CSV TO JSON
    const processCSV = (csvfile) => {
        const arr = csvfile.toString().split("\n")
        var jsonObject = [];
        var headersCSV = arr[0].split(',')
        setHeaders(headersCSV)
        for (var i = 1; i < arr.length; i++) {
            var data = arr[i].split(',');
            var object = {};
            for (var j = 0; j < data.length; j++) {
                object[headers[j].trim()] = data[j].trim();
            }
            jsonObject.push(object)
        }
        console.log((jsonObject))
        YOURJSON = JSON.stringify(jsonObject);
        setCsvArray(jsonObject)
        localStorage.setItem('students', YOURJSON)
    }

    //-> FUNCTION TO DOWNLOAD THE JSON FILE
    const exportData = () => {
        const xdata = localStorage.getItem('students');
        if (xdata == null) { alert('No DATA STORED'); return; }
        const parseData = JSON.parse(xdata);
        const finalData = JSON.stringify(parseData);
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            finalData
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = "data.json";

        link.click();
    };

    
    const submit = () => {
        const file = csvFile;
        const reader = new FileReader();

        reader.onload = function (e) {
            const text = e.target.result;
            console.log(text);
            processCSV(text)
        }

        reader.readAsText(file);
    }
    //-> REF TO FOCUS ON THE INPUT WHOSE VISIBLITY IS HIDDEN
    function focus() {
        refc.current.click();
    }

    return (
        <>
            <div className="home-main">
                <div className="home-top"><div className="home-title">Students</div>
                    <div className="home-buttons">
                        <input style={{ display: 'none' }} className='button-input' ref={refc}

                            type='file'
                            accept='.csv'
                            id='csvFile'
                            name=''
                            onChange={(e) => {
                                setCsvFile(e.target.files[0])
                            }}
                        >
                        </input>
                        <button onClick={focus}>Import Students</button>
                        <button onClick={exportData}>Export Students</button>
                    </div>
                </div>
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        if (csvFile) submit()
                    }}
                >
                    Save to local Storage
                </button>
            </div>
        </>
    );

}