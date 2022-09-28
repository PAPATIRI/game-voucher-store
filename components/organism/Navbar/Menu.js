import PropTypes from "prop-types";
import cx from "classnames";
import Link from "next/link";

export default function Menu(props) {
  const { title, active, href = "/" } = props;
  const classTitle = cx({
    "nav-link": true,
    active,
  });

  return (
    <>
      <li className="nav-item my-auto">
        <Link href={href} aria-current="page">
          <a className={classTitle} aria-current="page">
            {title}
          </a>
        </Link>
      </li>
    </>
  );
}

Menu.propTypes = {
  title: PropTypes.string,
  active: PropTypes.bool,
  href: PropTypes.string,
};
