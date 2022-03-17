import React, { useState } from "react";

type User = {
    name: string;
    id: string;
    pw: string;
}

function Join() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    // const onSubmit = (e) => {
    // }

    return (
        <>
            <h4>Itez에 오신걸 환영합니다.</h4>
            <div className="joinForm">
                <div className="joinCol">
                    <div>
                        이름
                        <input type="text" name='name' className="form-control ipInfo" placeholder="이름(실명)을 입력해주세요." onChange={(e) => setName(e.target.value)} value={name} />
                    </div>
                    <div>
                        이메일
                        <input type="text" name='id' className="form-control ipInfo" placeholder="example@gmail.com" onChange={(e)=>setEmail(e.target.value)} value={email} />
                    </div>
                    <div>
                        비밀번호
                        <input type="password" name='pw' className="form-control ipInfo" placeholder="영어+숫자 조합 8자리 이상 입력해주세요." onChange={(e)=>setPw(e.target.value)} value={pw} />
                    </div>
                    <button className="joinBtn submitBtn" type="submit">회원가입</button>
                </div>
            </div>
        </>
    );
}

export default Join;