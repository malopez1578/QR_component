import { QRCodeCanvas } from 'qrcode.react';
import css from './CardQr.module.scss';

const CardQr = (): JSX.Element => {
	return (
		<div className={css.wrapper}>
			<div className={css.wrapper__qr}>
				<QRCodeCanvas
					id="qrCode"
					value={'https://www.frontendmentor.io/?ref=challenge'}
					size={160}
                    fgColor={'#fff'}
					bgColor={'transparent'}
					level={'H'}
				/>
			</div>
			<div className={css.wrapper__content}>
				<h1 className={css.wrapper__content_title}>
					Improve your front-end skills by building projects
				</h1>
				<p className={css.wrapper__content_text}>
					Scan the QR code to visit Frontend Mentor and take your coding skills
					to the next level
				</p>
			</div>
		</div>
	);
};

export { CardQr };
