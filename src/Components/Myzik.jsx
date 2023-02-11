import React from 'react';

const Myzik = (props) => {
const groupName= 'Баста';
const name = 'Васи́лий Миха́йлович Вакуле́нко';



    return (
        <div className="myzicl">
            <h1> Название группы: {groupName}</h1>
            <p>Исполнитель : {name}</p>


            <div className="geleri">
                <img src="https://sun9-20.userapi.com/impf/c834100/v834100830/1660b4/Kbf4ZUPJr3U.jpg?size=600x600&quality=96&sign=33cf8714072d5e6a23bb2d1c6648e911&type=album"/>
                <img src="http://rapdb.ru/wp-content/uploads/2020/11/Баста-Баста-5-Часть-2-2016-переихдание-Gazgolder-UMG-CD-03.jpg"/>
                <img src="http://mail.mp3passion.net/uploads/posts/1286654716_450_basta_v_krugu_druzejj.jpg"/>
            </div>
        </div>
    );
};

export default Myzik;