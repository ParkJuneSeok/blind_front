import React, {useState, useRef} from 'react';
import axios from 'axios'
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function Join() {
    const [inputs, setInputs] = useState({
        action : '/member/join',
        memId : '',
        memPw : '',
        memPwChk : '',
        memNick : ''
    })

    const { memId, memPw, memPwChk, memNick } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;

        setInputs({
            ...inputs,
            [name] : value
        });
    };

    const onValidator = (e) => {
        //let fomeData =

        let data = {
            ...inputs
        }

        axios.post("http://localhost:8080/member/join", data).then((rtn) => {
            if(rtn.data.flag) {

            }
        }).catch((cat) => {
            console.log(cat);
        });
    }

    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <FormControl component={"form"} variant="standard">
                <TextField id="memId" name={"memId"}
                           label="아이디"
                           InputProps={{
                               startAdornment: (
                                   <InputAdornment position="start">
                                       <AccountCircle />
                                   </InputAdornment>
                               ),
                           }}
                           margin={"normal"}
                           variant="standard"
                           onChange={onChange}/>

                <TextField id="memPw" name={"memPw"}
                           label="비밀번호"
                           InputProps={{
                               startAdornment: (
                                   <InputAdornment position="start">
                                       <LockIcon />
                                   </InputAdornment>
                               ),
                           }}
                           type={"password"}
                           margin={"normal"}
                           variant="standard"
                           autoComplete={"off"}
                           onChange={onChange}/>

                <TextField id="memPwChk" name={"memPwChk"}
                           label="비밀번호 확인"
                           InputProps={{
                               startAdornment: (
                                   <InputAdornment position="start">
                                       <LockIcon />
                                   </InputAdornment>
                               ),
                           }}
                           type={"password"}
                           margin={"normal"}
                           variant="standard"
                           autoComplete={"off"}
                           onChange={onChange}/>

                <TextField id="memNick" name={"memNick"}
                           label="닉네임"
                           InputProps={{
                               startAdornment: (
                                   <InputAdornment position="start">
                                       <LocalOfferIcon />
                                   </InputAdornment>
                               ),
                           }}
                           margin={"normal"}
                           variant="standard"
                           onChange={onChange}/>

                <Box display={"flex"} sx={{ justifyContent:"flex-end" }}>
                    <Button variant="outlined" onClick={onValidator}>가입하기</Button>
                    <Button variant="outlined">취소</Button>
                </Box>
            </FormControl>

        </Box>
    );
};

export default Join;