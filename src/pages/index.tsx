import * as React from 'react';

import About from '@/components/about/About';
import HeroBanner from '@/components/hero/HeroBanner';
import Layout from '@/components/layout/Layout';
import Projects from '@/components/projects/Projects';
import Seo from '@/components/Seo';
import Technologies from '@/components/technologies/technologies';

/**s
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <HeroBanner />
      <Projects />
      <Technologies />
      <About />
    </Layout>
  );
}
