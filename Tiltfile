docker_build('jeffbentonsdet/unit-test-js', '.')
k8s_yaml('job.yaml')
# this needs to match the name in job.yaml
k8s_resource('test-2')

# round 2
# yaml = helm(
#     'unit-test-job',                  # chart name 
#     name='release-name-4',            # release name
#     values=['unit-test-job/values.yaml']
# )
# k8s_yaml(yaml)
# # helm <release name>-<chart name>
# k8s_resource('release-name-4-unit-test-job')

# round 3
# load('ext://helm_remote', 'helm_remote')
# helm_remote('jrbtx909-unit-test', release_name='release-name-1',
#     repo_url='http://localhost:8080',
#     repo_name='my-repo'
# )