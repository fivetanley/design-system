import Route from '@ember/routing/route';

export default class FetchContentRoute extends Route {
  async model() {
    // const response = await fetch(
    //   'https://mktg-content-api.vercel.app/api/content/waypoint/doc/v0.8.x/docs'
    // );
    // const doc = await response.json();

    const response = {
      meta: {
        status_code: 200,
        status_text: 'OK',
      },
      result: {
        product: 'waypoint',
        githubFile: 'website/content/docs/index.mdx',
        metadata: {
          layout: 'docs',
          description:
            'View a list of step-by-step tutorials for learning to deploy with Waypoint.',
          page_title: 'Documentation',
        },
        version: 'v0.8.x',
        created_at: '2022-07-06T18:19:19.220Z',
        markdownSource:
          "# Waypoint Documentation\n\nLearn and develop your knowledge of Waypoint with these tutorials and code resources.\n\n## Getting Started\n\n- Begin with this brief [quick start tutorial](/docs/v0.8.x/getting-started).\n- Continue with an introductory tutorial on [Docker](https://learn.hashicorp.com/collections/waypoint/get-started-docker), [Kubernetes](https://learn.hashicorp.com/collections/waypoint/get-started-kubernetes), or [Nomad](https://learn.hashicorp.com/collections/waypoint/get-started-nomad).\n\n## Deploying to the Cloud\n\nTake Waypoint to the cloud with tutorials that deploy to public cloud infrastructure.\n\n- AWS - Visit the [Elastic Container Service tutorial](https://learn.hashicorp.com/tutorials/waypoint/aws-ecs?in=waypoint/deploy-aws) or the Elastic Kubernetes Service tabs in the [Kubernetes tutorial](https://learn.hashicorp.com/collections/waypoint/get-started-kubernetes).\n- Azure - Deploy to [Azure Container Instances](https://learn.hashicorp.com/tutorials/waypoint/azure-container-instance?in=waypoint/deploy-azure).\n- Google Cloud - Learn from the [Google Cloud Run tutorial](https://learn.hashicorp.com/tutorials/waypoint/google-cloud-run?in=waypoint/deploy-google-cloud) or the Google Kubernetes Engine tabs in the [Kubernetes tutorial](https://learn.hashicorp.com/collections/waypoint/get-started-kubernetes).\n\n## Running Code Samples\n\nA growing number of code samples is available in the [hashicorp/waypoint-examples](https://github.com/hashicorp/waypoint-examples) repository at GitHub. Use these examples or contribute your own.\n\n`shell-session\ngit clone https://github.com/hashicorp/waypoint-examples.git\n`\n\n## contrib Tools and Helpers\n\nSome services and tools that Waypoint use involve some additional setup to run\nand manage locally.\n\nThe `contrib` folder aims to help users reduce friction around getting started\nusing these tools locally to explore Waypoint. You can find these optional tools\nand content on the [Waypoint GitHub repository](https://github.com/hashicorp/waypoint/tree/main/contrib).\n\nAn example of this is leveraging [kind](https://kind.sigs.k8s.io/) to setup a\nlocal kubernetnes cluster to install Waypoint server: [kind+k8s](https://github.com/hashicorp/waypoint/tree/main/contrib/serverinstall/kind-k8s).\n\nDon't see a tool here that you need to get started? Feel free to open a new\nenhancement request issue on GitHub, or contribute your own!\n\n## Extending\n\nThe [plugin documentation](/plugins/v0.8.x) describes more resources available to use\nin your Waypoint configuration. Contribute by writing your own plugin with this\n[plugin tutorial](/docs/v0.8.x/extending-waypoint/creating-plugins).\n\nIntegrate Waypoint into your continuous delivery workflow with examples for\n[GitHub Actions](/docs/v0.8.x/automating-execution/github-actions),\n[GitLab CI/CD](/docs/v0.8.x/automating-execution/gitlab-cicd),\n[CircleCI](/docs/v0.8.x/automating-execution/circle-ci), or\n[Jenkins](/docs/v0.8.x/automating-execution/jenkins).\n",
        mdxTransforms: [
          'extract-frontmatter',
          'include-partials',
          'paragraph-custom-alerts',
          'rewrite-internal-redirects',
          'rewrite-internal-links-v3',
          'rewrite-static-assets',
        ],
        sha: 'd19cd103c58432127712a036ce7e857e9e2398f0',
        sk: 'doc#docs',
        subpath: 'docs',
        pk: 'waypoint#doc/v0.8.x/docs',
      },
    };

    const doc = response.result;

    return doc;
  }
}
