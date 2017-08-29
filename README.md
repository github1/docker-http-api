# docker-http-api

Provides docker APIs over http

## Example

```shell
docker run -p 9999:9999 -v '/var/run/docker.sock:/var/run/docker.sock' jcollier/docker-http-api
```

## License

Uses [dockerode]

Licensed under the Apache license, version 2.0 (the "license"); You may not use this file except in compliance with the license. You may obtain a copy of the license at:

    http://www.apache.org/licenses/LICENSE-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the license is distributed on an "as is" basis, without warranties or conditions of any kind, either express or implied. See the license for the specific language governing permissions and limitations under the license.

[dockerode]: https://github.com/apocas/dockerode