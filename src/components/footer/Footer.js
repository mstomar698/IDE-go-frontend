import * as AiIcons from 'react-icons/ai';

const Footer = ({theme}) => {
    return (
      <>
      <div className={'d-flex justify-content-center mt-2'}>
      <a
      href={'https://github.com/mstomar698'}
      title={'mstomar698'}
      >
      <AiIcons.AiFillGithub size={30} color={theme.colors.text} />
      </a>
      </div>
      <div className="text-center items-center mt-1" color={theme.colors.text}>Scarelma</div>
      </>
    )
}

export default Footer