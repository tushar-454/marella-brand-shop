import PropTypes from 'prop-types';

const SectionTitle = ({ displayName, style }) => {
  return (
    <div className='sectionTitle'>
      <h1 className='underline underline-offset-4'>
        <span
          className={`text-5xl font-bold text-transparent bg-clip-text`}
          style={style}
        >
          {displayName}
        </span>
      </h1>
    </div>
  );
};

SectionTitle.propTypes = {
  displayName: PropTypes.string,
  style: PropTypes.object,
};

export default SectionTitle;
