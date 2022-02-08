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
import useForm from "hooks/useForm"
import validate from "hooks/validate"

function Join() {
    const { values, errors, submitting, handleChange, handleSubmit } = useForm({
        initialValues : { memId: "", memPw : "", memPwChk : "", memNick : ""},
        onSubmit :(values) => {
            alert(JSON.stringify(values, null, 2));
        },
        validate
    });

    return (
        <Box>
            <FormControl component={"form"} variant="standard" onSubmit={handleSubmit} noValidate>
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
                           value={values.memId}
                           onChange={handleChange}
                           className={errors.memId && "errorInput"}/>
                {errors.memId && <span className="errorMessage">{errors.memId}</span>}
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
                           value={values.memPw}
                           onChange={handleChange}
                           className={errors.memPw && "errorInput"}/>
                {errors.memPw && <span className="errorMessage">{errors.memPw}</span>}
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
                           value={values.memPwChk}
                           onChange={handleChange}
                           className={errors.memPwChk && "errorInput"}/>

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
                           value={values.memNick}
                           onChange={handleChange}
                           className={errors.memNick && "errorInput"}/>

                <Box display={"flex"} sx={{ justifyContent:"flex-end" }}>
                    <Button type={"submit"} variant="outlined" disabled={submitting}>가입하기</Button>
                    <Button variant="outlined">취소</Button>
                </Box>
            </FormControl>

        </Box>
    );
};

export default Join;