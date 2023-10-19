import PropTypes from 'prop-types';

const SectionTitle = ({ displayName, to, from }) => {
  return (
    <div className='sectionTitle'>
      <h1 className='underline underline-offset-4'>
        <span
          className={`text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-[${to}] from-[${from}]`}
        >
          {displayName}
        </span>
      </h1>
    </div>
  );
};

SectionTitle.propTypes = {
  displayName: PropTypes.string,
  to: PropTypes.string,
  from: PropTypes.string,
};

export default SectionTitle;
