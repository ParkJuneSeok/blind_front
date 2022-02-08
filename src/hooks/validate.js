export default function validate({ memId, memPw }) {
    const errors = {};

    if (!memId) {
        errors.memId = "아이디를 입력하세요.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(memId)) {
        errors.memId = "입력된 이메일이 유효하지 않습니다.";
    }

    if (!memPw) {
        errors.memPw = "비밀번호가 입력되지 않았습니다.";
    } else if (memPw.length < 8) {
        errors.memPw = "8자 이상의 패스워드를 사용해야 합니다.";
    }

    return errors;
}