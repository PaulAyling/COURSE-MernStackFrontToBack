import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({
  education: { school, degree, fieldofStudy, current, to, from, description }
}) => {
  return (
    <div>
      <h3 className='text-dark'>school</h3>
      <p>
        <Moment format='YYYY/MM/DD'>{from}</Moment>-{' '}
        {!to ? ' Now ' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
      </p>
      <p>
        <strong>Degree: </strong> {degree}
      </p>
      <p>
        <strong>Field: </strong> {fieldofStudy}
      </p>
      <p>
        <strong>Description: </strong> {description}
      </p>
    </div>
  );
};

ProfileEducation.propTypes = {};

export default ProfileEducation;
//
