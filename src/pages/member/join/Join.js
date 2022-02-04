import React, {useState, useEffect} from 'react';

function Join() {
    const [inputs, setInputs] = useState({
        action : 'insert'
        memId : '',
        memPw : '',
        memPwChk : '',
        nickName : ''
    })

    const { memId, memPw, memPwChk, nickName } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;

        setInputs({
            ...inputs,
            [name] : value
        });
    };



    const onValidator = (e) => {

        setInputs({
            ...inputs,
            action : "insert"
        });

        if(inputs.memId != null) {

        }
    }

    return (
        <div>
            <form action={inputs.action}>
                <div>
                    <span>
                        <label htmlFor={"memId"}> ID : </label>
                    </span>
                    <span>
                        <input type={"text"} id={"memId"} name={"memId"} onChange={onChange} value={memId} />
                    </span>
                </div>
                <div>
                    <span>
                        <label htmlFor={"memPw"}> PW : </label>
                    </span>
                    <span>
                        <input type={"password"} id={"memPw"} name={"memPw"} autoComplete={"off"} onChange={onChange} value={memPw} />
                    </span>
                </div>
                <div>
                    <span>
                        <label htmlFor={"memPwChk"}> PW RE : </label>
                    </span>
                    <span>
                        <input type={"password"} id={"memPwChk"} name={"memPwChk"} autoComplete={"off"} onChange={onChange} value={memPwChk} />
                    </span>
                </div>
                <div>
                    <span>
                        <label htmlFor={"nickName"}> NickName : </label>
                    </span>
                    <span>
                        <input type={"text"} id={"nickName"} name={"nickName"} onChange={onChange} value={nickName} />
                    </span>
                </div>
                <div>
                    <span>
                        <button type={"submit"} onClick={onValidator}>subbbb</button>
                    </span>
                    <span>
                        <button type={"reset"}>reset</button>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Join;