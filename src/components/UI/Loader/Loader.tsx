import s from './Loader.module.scss'

export const Loader = () => {
    return (
        <div className="w-screen h-screen">
            <div className={s['loading-indicator']}>
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
