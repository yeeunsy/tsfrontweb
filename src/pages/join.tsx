import React from "react";

function Join () {

    // const [inputs, setInputs] = useState({
    //     name: '',
    //     id: '',
    //     pw: ''
    // });

    // const { name, id, pw } = inputs; // 비구조화 할당을 통해 값 추출

    // const onChange = (e) => {
    //     const { value, name } = e.target;
    //     setInputs({
    //         ...inputs,
    //         [name]: value
    //     });
    // };
  
    const onSubmit = () => {

    };
  
    return (
        <>
        <h4>Itez에 오신걸 환영합니다.</h4>
        <div className="joinCol">
                <div className="col-8">
                <div>
                이름
            </div>
            <div>
                {/* onChange={(e)=>setName(e.target.value)} value={name} */}
                <input type="text" name='name' className="form-control ipInfo" placeholder="이름(실명)을 입력해주세요."></input>
            </div>
            <div>
                이메일
            </div>
            <div>
                {/* onChange={(e)=>setId(e.target.value)} value={id}  */}
                <input type="text" name='id' className="form-control ipInfo" placeholder="example@gmail.com"></input>
            </div>
            <div>
                비밀번호
            </div>
            <div>
                {/* onChange={(e)=>setPw(e.target.value)} value={pw} */}
                <input type="password" name='pw' className="form-control ipInfo" placeholder="영어+숫자 조합 8자리 이상 입력해주세요."></input>
            </div>
            <div>
                <button className="joinBtn submitBtn" type="button">회원가입</button>
            </div>
            </div>
        </div>
        </>
    );
}

export default Join;