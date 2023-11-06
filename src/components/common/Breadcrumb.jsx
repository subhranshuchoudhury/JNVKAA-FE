import { useRouter } from 'next/router';

const Breadcrumbs = () => {
  const router = useRouter();
  const { pathname } = router;

  // Splitting the pathname into an array of segments
  const pathSegments = pathname.split('/').filter(segment => segment !== '');

  return (
    <div className="breadcrumb-section">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>

            {pathSegments.map((segment, index) => {
              const path = `/${pathSegments.slice(0, index + 1).join('/')}`;

              // Checking if it's the last segment
              const isLastSegment = index === pathSegments.length - 1;

              return (
                <li
                  key={segment}
                  className={`breadcrumb-item ${isLastSegment ? 'active' : ''}`}
                  aria-current={isLastSegment ? 'page' : ''}
                >
                  {isLastSegment ? (
                    segment
                  ) : (
                    <a href={path}>{segment}</a>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;
