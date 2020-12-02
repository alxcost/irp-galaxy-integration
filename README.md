# iReceptor Plus Gateway Galaxy Datasource

Galaxy datasource tool for connecting a Galaxy instance to the iReceptor Plus Gateway.

## Installation

1. Copy `irp-gateway.xml` to `galaxy-central/tools/data_source`
2. Configure `galaxy-central/config/tool_conf.xml` to include the new tool by adding the following entry under the `<section id="getext" name="Get Data">` tag.

   Example:
```xml
<?xml version='1.0' encoding='utf-8'?>
    <toolbox monitor="true">
        <section id="getext" name="Get Data">
            [...]
            <tool file="data_source/irp-gateway.xml" />
            [...]
```

3. Restart or reload Galaxy's instance

