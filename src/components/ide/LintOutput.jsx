import styles from './CodeOutput.module.scss'

const LintOutput = ({ outputs }) => {
  return (
    <div className={styles.stylelint}>
      {outputs.map((output, index) => (
        <div key={index} className={styles.outputSection}>
          {output.header && (
            <p className={styles[output.header.className]}>
              {output.header.text}
            </p>
          )}
          
          {output.file && (
            <p className={styles[output.file.className]}>
              {output.file.path}
            </p>
          )}
          
          {output.messages?.map((message, i) => (
            <p key={i}>
              {message.parts.map((part, j) => (
                <span 
                  key={j} 
                  className={part.className ? styles[part.className] : ''}
                >
                  {part.text}
                </span>
              ))}
            </p>
          ))}
          
          {output.summary && (
            <p className={styles[output.summary.className]}>
              {output.summary.text}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default LintOutput;