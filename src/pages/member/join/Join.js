import React from 'react';

const Join = () => {
    return (
        <div>
            <form>
                <div>
                    <span>
                        <label htmlFor={"memId"}> ID : </label>
                    </span>
                    <span>
                        <input type={"text"} id={"memId"} name={"memId"}/>
                    </span>
                </div>
                <div>
                    <span>
                        <label htmlFor={"memPw"}> PW : </label>
                    </span>
                    <span>
                        <input type={"password"} id={"memPw"} name={"memPw"} autoComplete={"off"}/>
                    </span>
                </div>
                <div>
                    <span>
                        <label htmlFor={"memPwChk"}> PW RE : </label>
                    </span>
                    <span>
                        <input type={"password"} id={"memPwChk"} autoComplete={"off"}/>
                    </span>
                </div>
                <div>
                    <span>
                        <label htmlFor={"nickName"}> NickName : </label>
                    </span>
                    <span>
                        <input type={"text"} id={"nickName"} name={"nickName"}/>
                    </span>
                </div>
                <div>
                    <span>
                        <button type={"submit"}>subbbb</button>
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