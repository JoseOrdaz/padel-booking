import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function BlogCard({ img, name, title, position, socials }) {
  return (
    <Card color="transparent" shadow={false} className="text-center">
      <Avatar
        src={img}
        alt={name}
        size="xxl"
        className="h-full w-full shadow-lg shadow-gray-500/25"
      />
      <Typography variant="h5" color="blue-gray" className="mt-6 mb-1">
        {title}
      </Typography>
      {position && (
        <Typography className="font-normal text-blue-gray-500">
          {position}
        </Typography>
      )}
      {socials && <div className="mx-auto mt-5">{socials}</div>}
    </Card>
  );
}

BlogCard.defaultProps = {
  position: "",
  socials: null,
};

BlogCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  position: PropTypes.string,
  socials: PropTypes.node,
};

BlogCard.displayName = "/src/widgets/layout/team-card.jsx";

export default BlogCard;
