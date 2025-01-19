import s from './SpinnerLoader.module.scss'

export const SpinnerLoader = () => {
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
