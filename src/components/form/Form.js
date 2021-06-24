import React  from 'react';
import '../form/form.scss';

import { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          length: 9
        };
      }
    
    handlerChange = (e) => {
        console.log(e.target.value);
        if (e.target.value === "cccd") {
          this.setState({ length: 12 });
        } else {
          this.setState({ length: 9 });
        }
      };
render(){
    return (
        //    <Container>
        <form>

        
                <div className = "form-profile">
                <div className = "compulsory-info">
                <div className="rowlb">
                    <div className="col-25">
                        <label for="maTTS">Mã TTS:</label>
                    </div>
                    <div className="col-75">
                        <input maxlength="10" type="text" id="id-tts" name="maTTS" placeholder="Mã TTS...." required />
                    </div>
                </div>
                <div className="rowlb">
                    <div className="col-25">
                        <label for="name">Họ tên:</label>
                    </div>
                    <div className="col-75">
                        <input style = {{textTransform: "uppercase"}} type="text" id="name" name="name" placeholder="Nhập họ tên...." required />
                    </div>
                </div>
                <div className="rowlb">
                    <div className="col-25">
                        <label for="dob">Năm sinh:</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="dob" name="dob" placeholder="dd/mm/yyyy...." required/>
                    </div>
                </div>
                <div className = "rowlb">
                    <div className="col-25"> 
                        <label for="sex">Giới tính:</label>
                    </div>
                    <div className="col-25"> 
                        <label for="male">Nam</label>
                        <input type="radio" id="male" name="gender" value="male" required />
                    </div>
                    <div className="col-25"> 
                        <label for="female">Nữ</label>
                        <input type="radio" id="female" name="gender" value="female" required />
                    </div>
                    
                </div>
                <div className="rowlb">
                    <div className="col-25">
                        <label for="country">Quê quán:</label>
                    </div>
                    <div class="col-75">
                        <select  required id="country" name="country" required>
                            <option value="hanoi">Hà Nội</option>
                            <option value="haiphong">Hải Phòng</option>
                            <option value="saigon">Sài Gòn</option>
                        </select>
                    </div>
                </div>
                <div className="rowlb">
                    <div className="col-25">
                        <label for="phone">Số điện thoại:</label>
                    </div>
                    <div className="col-75">
                        <input  required type="text" id="phone" name="phone" placeholder="Nhập số điện thoại...." pattern="[0-9]{10}" />
                    </div>
                </div>
                </div>
                <div className = "unnecesary-info">
                <div className="rowlb">
    <div className="col-25">
                        <label for="truong">Trường:</label>
                    </div>
                    <div class="col-75">
                        <select id="school" name="school">
                            <option value="hust">Đại học Bách Khoa</option>
                            <option value="neu">Đại học Kinh Tế Quốc Dân</option>
                            <option value="ftu">Đại học Ngoại Thương</option>
                        </select>
                    </div>
                </div>
                <div className="rowlb">
                    <div className="col-25">
                        <label for="major">Chuyên ngành:</label>
                    </div>
                    <div class="col-75">
                        <select id="major" name="major">
                            <option value="cntt">Công nghệ thông tin</option>
                            <option value="quantrikinhdoanh">Quản trị kinh doanh</option>
                            <option value="pr">Quan hệ đại chúng</option>
                        </select>
                    </div>
                </div>
                <div className="rowlb">
                    <div className="col-25">
                        <label for="work">Vị trí thực tập:</label>
                    </div>
                    <div className="col-75">
                        <input style={{textTransform: 'uppercase'}} type="text" id="work" name="work" placeholder="VD: FRONTEND NODEJS" />
                    </div>
                </div>
                <div className="rowlb">
                    <div className="col-25">
                        <label for="date-from">Năm sinh:</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="date-from" name="date-from" placeholder="dd/mm/yyyy...." />
                    </div>
                </div>
                <div className="rowlb">
                    <div className="col-25">
                        <label for="email">Email:</label>
                    </div>
                    <div className="col-75">
                        <input type="email" id="email" name="email" placeholder="abc@edu.com...." autocomplete/>
                    </div>
                </div>
                <div className="rowlb">
                    <div className="col-25">
                        <select onChange={this.handlerChange} id="identify" name="identify">
                            <option value="cmnd">CMND</option>
                            <option value="cccd">CCCD</option>
                        </select>
                    </div>
                    <div className="col-75">
                    <input type="text" pattern={`[0-9]{${this.state.length}}`} maxlength={this.state.length} id="identify" name="identify" placeholder="031099001472...." />
                    </div>
                </div>
                <div className='button'>
                    <button className='Xoa' onClick={() => {window.confirm("Xóa không?");}}>Xóa</button>
                    <button type='submit' onClick={() => {window.confirm("Thêm không?");}} className='Them'>Thêm</button>
                </div>
                </div>
            </div>
            </form>
        //    </Container>
        );
}
    
}

export default Form;