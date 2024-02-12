import React from 'react';
import Helmet from 'react-helmet';

const Admin = () => {
    return (
        <>
            <Helmet
                // title={"Admin"}
                // meta={[
                //     { charset: 'utf-8' },
                //     {http-equiv: 'http-equiv', content: "IE=edge"},
                //     {name: 'robots', content: 'noindex'},
                //     {name: 'description', content: " "},
                //     {name: 'author', content: ' '},
                //     {name: 'HandheldFriendly', content: 'true'},
                //     {name: 'MobileOptimized', content: '320'},
                //     {name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'},

                // ]}
                // link={[

                // ]}
            >
            <html lang="en" />
            <meta charset="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="robots" content="noindex" />
                <title>Admin</title>
                <meta name="description" content=" " />
                <meta name="author" content=" " />
                <meta name="HandheldFriendly" content="true" />
                <meta name="MobileOptimized" content="320" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />

                <link rel="stylesheet" href="https://local.forestry.io/main.css" />


                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>


                <script src="https://use.fortawesome.com/b6f38602.js"></script>
        </Helmet>

        <div id="app">

        </div>
        <script id="admin-config-script" type="text/javascript">
            {`
                    var env = {
            siteId: "9teog-z8jqo52q",
            local: false
        };
        `}
        </script>
        <script type="application/javascript" src="https://local.forestry.io/forestry.min.js"></script>

        </>
    )
}

export default Admin; 