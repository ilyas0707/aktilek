import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { AuthContext } from '../../context/AuthContext'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import Styles from './Admin.module.css'
import Overlay from "./../../App.module.css"
import { useHttp } from '../../hooks/http.hook'
import { useError } from '../../hooks/error.hook'
import { useSuccess } from '../../hooks/success.hook'

export const Admin = () => {
    toast.configure({
        position: 'top-center',
        autoClose: 3000,
        draggable: true,
    })

    const [show, setShow] = useState(false)
    const history = useHistory()
    const auth = useContext(AuthContext)

    const { request, API_URL } = useHttp()
    const successMessage = useSuccess()
    const errorMessage = useError()
    const [news, setNews] = useState({})

    useEffect(() => {
        window.scrollTo(0,0);
        return () => {
            window.scrollTo(0,0);
        }
    })

    const postHandler = async (type) => {
        try {
            const posted = await request(
                `${API_URL}/api/${ type }/add`,
                'POST',
                { ...news },
                {
                    Authorization: `Bearer ${ auth.token }`,
                }
            )
            successMessage(posted.message)
        } catch (e) {
            errorMessage(e.message)
        }
    }

    const changeHandler = event => {
        

        if (event.target.name === 'imageUrl') {
            let files
            files = Array.from(event.target.files)
        
            files.forEach(file => {
            if (!file.type.match('image')) {
                return
            }
        
            const reader = new FileReader()
        
            reader.onload = ev => {
                const src = ev.target.result
                setNews({ ...news, [event.target.name]: event.target.value, imageUrl: src })
            }
        
            reader.readAsDataURL(file)
            })
        } else {
            setNews({ ...news, [event.target.name]: event.target.value })
        }
    }

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push("/")
    }

    const showModal = event => {
        event.preventDefault()
        setShow(true)
    }

    const logoutCancel = useCallback(() => {
        setShow(false)
    }, [setShow])

    const escHandler = useCallback((event) => {
        if(event.keyCode === 27) {
            logoutCancel()
        }
    }, [logoutCancel])

    useEffect(() => {
        document.addEventListener("keydown", escHandler, false)
        return () => {
            document.removeEventListener("keydown", escHandler, false)
        }
    }, [escHandler])

    console.log(news);

    const newsCreate = [
        { type: 'file', name: 'imageUrl', placeholder: '????????????????????' },
        { type: 'text', name: 'heading', placeholder: '??????????????????' },
        { type: 'text', name: 'date', placeholder: '????????' },
    ]

    return (
        <div className={Styles.admin}>
            <header className={Styles.header}>
                <div className="container">
                    <div className={Styles.block}>
                        <h2>?????????? ????????????</h2>
                        <div className={Styles.item}>
                            <a href="/" className={Styles.link} onClick={showModal}>
                                <i className={`material-icons ${Styles.icon}`}>exit_to_app</i>
                            </a>
                        </div>
                        <div className={`${Overlay.overlay} ${show ? Styles.active : !show}`} onClick={logoutCancel}></div>
                        <div className={`${Styles.message} ${show ? Styles.active : !show}`}>
                            <p className={Styles.text}>???? ??????????????, ?????? ???????????? ???????????</p>
                            <a href="/" className={Styles.submit} onClick={logoutHandler}>????</a>
                            <a href="/" className={Styles.submit} onClick={e => {e.preventDefault(); logoutCancel()}}>??????</a>
                        </div>
                    </div>
                </div>
            </header>
            <div className={Styles.forms}>
                <form action="#" className={Styles.form}>
                    <h3 className={Styles.title}>???????????????? ????????????????</h3>
                    {
                        newsCreate.map(({ type, name, placeholder }, i) => {
                            return (
                                <input key={ i } className={Styles.input} type={ type } name={ name } placeholder={ placeholder } onChange={changeHandler} />
                            )
                        })
                    }
                    <textarea className={Styles.input} onChange={changeHandler} name="description" cols="30" rows="10" placeholder="????????????????"></textarea>
                    <div className={Styles.button}>
                        <button onClick={ e => {e.preventDefault(); postHandler('news')} } className={Styles.submit} type={Styles.submit}>??????????????</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
