const parseEnv = () => {
    //process.env['RSS_VARIABLE'] = 'value';
    //process.env['RSS_TEST'] = '128'
        
    const envVars = process.env;
        
    const rssArray = Object.entries(envVars)
            .filter(([key]) => key.startsWith('RSS_'));
        
    const result = rssArray
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');
        
    console.log(result);
}
parseEnv();