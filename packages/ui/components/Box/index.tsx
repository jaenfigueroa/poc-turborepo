import './style.css'

type Props = {
  text: string;
  color: 'violet' | 'red' | 'blue';
}

export const Box = ({text, color}: Props) => {
  return (
    <div className={`box box--${color}`}>
      {text}
    </div>
  )
}