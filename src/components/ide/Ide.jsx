import styles from './Ide.module.scss'

const Ide = () => {
	return ( 
		<>
			<code>
				<div className={styles.output}>
					<div className={styles['stylelint__number']}>
						<ul className="stylelint__number-list">
							<li>
								<span className={styles.number}>1 </span>
								<span className={styles.red}>body</span> 
								<span className={styles.white}>{'{'}</span>
							</li>
							<li>
								<span className={styles.number}>2</span> 
								<span className={styles.purple}>background-color</span>
								<span className={styles.white}>: black;</span> 
							</li>
							<li>
								<span className={styles.number}>3 </span> 
								<span className={styles.white}>{'}'}</span></li>
							<li>
								<span className={styles.number}>4</span>&nbsp;
							</li>
							<li>
								<span className={styles.number}>5</span> 
								<span className={styles.red}> h1 </span>
								<span className={styles.gray}>{'{'}</span>
								</li>
							<li>
								<span className={styles.number}>6</span> 
								<span className={styles.purple}>font-size</span>
								<span className={styles.white}>:</span> 
								<span className={styles.rose}>22px</span>
								<span className={styles.gray}>;</span>
							</li>
							<li>
								<span className={styles.number}>7</span> 
								<span className={styles.purple}>color</span>
								<span className={styles.gray}>:</span> 
								<span className={styles.hot}> #ff0000</span>
								<span className={styles.gray}>;</span>
							</li>
							<li>
								<span className={styles.number}>8 </span> 
								<span className={styles.white}>{'}'}</span>
							</li>
							<li>
								<span className={styles.number}>9</span>&nbsp;
							</li>
							<li>
								<span className={styles.number}>10</span> 
								<span className={styles.gelb}> .siteHeader</span> 
								<span className={styles.gray}>{'{'}</span>
							</li>
							<li>
								<span className={styles.number}>11</span> 
								<span className={styles.purple}>font-size</span>
								<span className={styles.gray}>:</span> 
								<span className={styles.rose}>50px</span>
								<span className={styles.gray}>;</span>
							</li>
							<li>
								<span className={styles.number}>12</span> 
								<span className={styles.purple}>color</span>
								<span className={styles.white}>: white;</span>
							</li>
							<li>
								<span className={styles.number}>13</span> 
								<span className={styles.purple}>color</span>
								<span className={styles.white}>: black;</span>
							</li>
							<li>
								<span className={styles.number}>14 </span> 
								<span className={styles.white}>{'}'}</span>
							</li>
						</ul>
					</div>
				</div>
			</code>
		</>
	 );
}
 
export default Ide;