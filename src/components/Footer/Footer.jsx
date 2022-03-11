import React, { Fragment, useEffect, useState } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';

import classes from './Footer.module.scss';

import SubFooter from './SubFooter';

import { IoIosArrowUp } from 'react-icons/io';

import Section from './Section';
import Account from './Account';
import Contact from './Contact';
import Social from './Social';

const Footer = () => {
  const { width } = useWindowDimensions();
  const isShowing = width > 550 ? true : false;

  const [showSection, setshowSection] = useState(isShowing);
  const [showAccount, setshowAccount] = useState(isShowing);
  const [showContact, setshowContact] = useState(isShowing);

  useEffect(() => {
    if (width > 550) {
      setshowSection(true);
      setshowAccount(true);
      setshowContact(true);
    } else {
      setshowSection(false);
      setshowAccount(false);
      setshowContact(false);
    }
  }, [width]);

  return (
    <Fragment>
      <footer>
        <div className={classes.footer}>
          <div className={classes.grid}>
            <Section
              showSection={showSection}
              setshowSection={setshowSection}
              logo={IoIosArrowUp}
            />
            <Account
              showAccount={showAccount}
              setshowAccount={setshowAccount}
              logo={IoIosArrowUp}
            />
            <Contact
              showContact={showContact}
              setshowContact={setshowContact}
              logo={IoIosArrowUp}
            />
            <Social />
          </div>
        </div>
      </footer>
      <SubFooter />
    </Fragment>
  );
};

export default Footer;
