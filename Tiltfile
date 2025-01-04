docker_build('jrbtx909/unit-test-js', '.')
# round 1
# k8s_yaml('job.yaml')
# k8s_resource('test-1')

# round 2
yaml = helm(
    'jrbtx909-unit-test',
    name='jrbtx909-unit-test',
    values=['jrbtx909-unit-test/values.yaml']
)
k8s_yaml(yaml)
k8s_resource('jrbtx909-unit-test')

# round 3
# load('ext://helm_remote', 'helm_remote')
# helm_remote('jrbtx909-unit-test', release_name='release-name-1',
#     repo_url='http://localhost:8080',
#     repo_name='my-repo'
# )